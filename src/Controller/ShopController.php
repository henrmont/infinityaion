<?php

namespace App\Controller;

use App\Entity\Aion;
use App\Entity\History;
use App\Entity\Inventory;
use App\Entity\Item;
use App\Entity\ItemType;
use App\Entity\Mail;
use App\Entity\Message;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ShopController extends AbstractController
{
    /**
     * @Route("/shop", name="shop")
     */
    public function index(ContainerInterface $container, Request $request)
    {
        try{
            $user = $this->getUser();

            $em = $this->getDoctrine()->getManager();

            $data = $em->getRepository(Item::class)->searchItem($request->get('search'), $request->get('category'), $user->getRace());
            $players = $em->getRepository(User::class)->searchChar($user->getUsername());
            $category = $em->getRepository(ItemType::class)->findAll();

            $pagenator = $container->get('knp_paginator');
            $result = $pagenator->paginate(
                $data,
                $request->query->getInt('page',1),
                $request->query->getInt('limit',8)
            );

            return $this->render('painel/contents/shop/shop.html.twig', [
                'data'      =>  $result,
                'players'   =>  $players,
                'category'  =>  $category,
                'status_race'      =>  $user->getRace(),
                'status_name'      =>  $user->getName(),
                'status_image'      =>  $user->getImage(),
                'status_coins'     =>  $user->getCoin()
            ]);
        }catch(\Exception $e){
            return $e->getMessage();
        } 
        
    }

    // /**
    //  * @Route("/shop/cart", name="cart")
    //  */
    // public function cartIndex(ContainerInterface $container, Request $request)
    // {
    //     try{
    //         $user = $this->getUser();

    //         $em = $this->getDoctrine()->getManager();

    //         $data = $em->getRepository(ShopItem::class)->searchCartItens($user->getId());
    //         $players = $em->getRepository(ShopItem::class)->searchChar($user->getUsername());

    //         // echo "<pre>";
    //         // print_r($data);
    //         // echo "<pre>";
    //         // die();

    //         return $this->render('painel/contents/shop/cart.html.twig', [
    //             'data'      =>  $data,
    //             'players'   =>  $players
    //         ]);
    //     }catch(\Exception $e){
    //         return $e->getMessage();
    //     }
        
    // }

    // /**
    //  * @Route("/shop/inc", name="shop_inc")
    //  */
    // public function shopInc(Request $request)
    // {
    //     try{
    //         $user = $this->getUser();
            
    //         $em = $this->getDoctrine()->getManager();
            
    //         $item = $em->getRepository(Item::class)->findOneBy([
    //             'aion' =>   $request->get('aionId')
    //         ]);

    //         $player = explode('|',$request->get('selchar'));

    //         $shopitem = new ShopItem();

    //         $shopitem->setUser($user->getId());
    //         $shopitem->setPlayer($player[0]);
    //         $shopitem->setPlayerName($player[1]);
    //         $shopitem->setItem($request->get('aionId'));
    //         if($item->getAmount() == 1){
    //             $shopitem->setAmount($request->get('amount'));
    //         } else {
    //             $shopitem->setAmount(1);
    //         }
    //         $shopitem->setStatus('Cart');
    //         $shopitem->setPrice($item->getPrice());
    //         $shopitem->setCreatedAt(new \DateTime('now'));
    //         $shopitem->setModifiedAt(new \DateTime('now'));

    //         $em->persist($shopitem);
    //         $em->flush();

    //         return $this->redirectToRoute('shop');
    //     }catch(\Exception $e){
    //         return $e->getMessage();
    //     }
        
    // }

    // /**
    //  * @Route("/shop/del", name="shop_del")
    //  */
    // public function shopDel(Request $request)
    // {
    //     try{
    //         $user = $this->getUser();
            
    //         $em = $this->getDoctrine()->getManager();
            
    //         $item = $em->getRepository(ShopItem::class)->find($request->get('id'));

    //         $em->remove($item);
    //         $em->flush();

    //         return $this->redirectToRoute('cart');
    //     }catch(\Exception $e){
    //         return $e->getMessage();
    //     }
        
    // }

    // /**
    //  * @Route("/shop/edit", name="shop_edit")
    //  */
    // public function shopEdit(Request $request)
    // {
    //     try{
    //         $user = $this->getUser();
            
    //         $em = $this->getDoctrine()->getManager();
            
    //         $item = $em->getRepository(ShopItem::class)->find($request->get('id'));

    //         $player = explode('|',$request->get('selchar'));
    //         $item->setPlayer($player[0]);
    //         $item->setPlayerName($player[1]);
    //         $item->setAmount($request->get('amount'));

    //         $em->flush();

    //         return $this->redirectToRoute('cart');
    //     }catch(\Exception $e){
    //         return $e->getMessage();
    //     }
        
    // }

    /**
     * @Route("/shop/buy", name="shop_buy")
     */
    public function shopBuy(Request $request)
    {
        $con = $this->getDoctrine()->getConnection();
        $con->beginTransaction();
        try{
            $user = $this->getUser();
            $em = $this->getDoctrine()->getManager();
            $em_aion_gs = $this->getDoctrine()->getManager('aiongs');

            $item = $em->getRepository(Item::class)->findOneBy([
                'aion'  =>  $request->get('aionId')
            ]);

            $chk = substr($item->getAionid(),0,3);
            $vip = substr($item->getAionid(),3,2);

            // echo $vip;
            // die();

            //mail e inventory
            $unique_id = $em->getRepository(Inventory::class)->getUnique();
            $mail_id = $em->getRepository(Mail::class)->getMailId();

            if($user->getCoin() >= ($item->getPrice()*$item->getAmount())){
                $mail = new Mail();
                $message = new Message();

                if($chk == 519){
                    $vip = substr($item->getAionid(),3,2);
                    $em->getRepository(User::class)->insertVip($user->getUsername(), $vip);

                    //history
                    $history = new History();
                    $history->setUser($user->getId());
                    $history->setCreatedAt(new \DateTime('now'));
                    $history->setModifiedAt(new \DateTime('now'));
                    $history->setItem($item->getAionId());
                    $history->setAmount($item->getAmount());
                    $history->setPrice($item->getPrice());
                    $history->setTotal($item->getPrice()*$item->getAmount());
                    $em->persist($history);

                    //message
                    $message->setUser($user->getId());
                    $message->setSubject('VIP Adquirido');
                    $message->setText('Você adquiriu o pacote '.$item->getName().'. A equipe do Infinity Aion agradece.');
                    $message->setUnread(false);
                    $message->setCreatedAt(new \DateTime('now'));
                    $message->setModifiedAt(new \DateTime('now'));
                    $em->persist($message);
                }else{
                    //history
                    $history = new History();
                    $history->setUser($user->getId());
                    $history->setCreatedAt(new \DateTime('now'));
                    $history->setModifiedAt(new \DateTime('now'));
                    $history->setItem($item->getAionId());
                    $history->setAmount($item->getAmount());
                    $history->setPrice($item->getPrice());
                    $history->setUnique($unique_id[0]['unique_id']+1);
                    $history->setTotal($item->getPrice()*$item->getAmount());

                    $player = explode('|',$request->get('selchar'));
                    $history->setPlayer($player[0]);
                    $history->setPlayerName($player[1]);
                    $em->persist($history);

                    $inventory = new Inventory();
                    $inventory->setId($unique_id[0]['unique_id']+1);
                    $inventory->setItemId($item->getAionId());
                    $inventory->setItemCount($item->getAmount());
                    $inventory->setItemSkin($item->getAionId());
                    $inventory->setItemOwner($player[0]);
                    $em_aion_gs->persist($inventory);
                    // $em_aion_gs->flush();

                    //mail
                    $mail->setId($mail_id[0]['mail_id']+1);
                    $mail->setMailRecipientId($player[0]);
                    $mail->setSenderName('Infinity Aion');
                    $mail->setMailTitle('Aion Shop');
                    $mail->setMailMessage('Obrigado por adquirir esse item. A equipe do Infinity Aion agradece.');
                    $mail->setUnread(1);
                    $mail->setAttachedItemId(0);
                    $mail->setAttachedKinahCount(0);
                    $mail->setExpress(2);
                    $mail->setRecievedTime(new \DateTime('now'));
                    $em_aion_gs->persist($mail);

                    //message
                    $message->setUser($user->getId());
                    $message->setSubject('Item Adquirido');
                    $message->setText('Você adquiriu o item '.$item->getName().'. A equipe do Infinity Aion agradece.');
                    $message->setUnread(false);
                    $message->setCreatedAt(new \DateTime('now'));
                    $message->setModifiedAt(new \DateTime('now'));
                    $em->persist($message);
                }

                $user->setCoin($user->getCoin() - ($item->getPrice()*$item->getAmount()));

                $em->flush();
                $em_aion_gs->flush();

                $con->commit();
            } else {

            }
            
            return $this->redirectToRoute('shop');
        }catch(\Exception $e){
            $con->rollBack();
            return $e->getMessage();
        }
    }

    // /**
    //  * @Route("/shop/reset", name="shop_reset")
    //  */
    // public function shopReset()
    // {
    //     try{
    //         $user = $this->getUser();
            
    //         $em = $this->getDoctrine()->getManager();
            
    //         $item = $em->getRepository(ShopItem::class)->resetCart($user->getId());

    //         return $this->redirectToRoute('cart');
    //     }catch(\Exception $e){
    //         return $e->getMessage();
    //     }
        
    // }
}

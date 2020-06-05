<?php

namespace App\Controller;

use App\Entity\HistoryCoin;
use App\Entity\Item;
use App\Entity\ItemType;
use App\Entity\Ticket;
use App\Entity\TicketMessage;
use App\Entity\User;
use App\Form\FormItem;
use App\Form\FormItemType;
use App\Form\TicketType;
use App\Repository\HistoryCoinRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * @Route("/admin")
 */
class AdminController extends AbstractController
{
    /**
     * @Route("/", name="admin")
     */
    public function index(Request $request, SluggerInterface $slugger)
    {
        try{
            $user = $this->getUser();

            $em = $this->getDoctrine();

            $select_itemtype = $em->getRepository(ItemType::class)->findAll();
            $select_item = $em->getRepository(Item::class)->findAll();
            $select_user = $em->getRepository(User::class)->findAll();
            // echo "<pre>";
            // print_r($select_item);
            // echo "</pre>";
            // die();


            /* Categoria */

            // Inc
            $itemtype = new ItemType();
            $itemtype_form = $this->createForm(FormItemType::class, $itemtype);
            $itemtype_form->handleRequest($request);
            if ($itemtype_form->isSubmitted() && $itemtype_form->isValid()) {
                $itemtype->setCreatedAt(new \DateTime('now'));
                $itemtype->setModifiedAt(new \DateTime('now'));

                $itemtype = $itemtype_form->getData();

                $em = $this->getDoctrine()->getManager();
                
                $em->persist($itemtype);
                $em->flush();

                return $this->redirectToRoute('admin');
            }

            /* Item */
            
            // Inc
            $item = new Item();
            $item_form = $this->createForm(FormItem::class, $item);
            $item_form->handleRequest($request);
            if ($item_form->isSubmitted() && $item_form->isValid()) {
                $item->setCreatedAt(new \DateTime('now'));
                $item->setModifiedAt(new \DateTime('now'));
                $item->setType($request->get('selcat'));

                /** @var UploadedFile $brochureFile */
                $imageFile = $item_form->get('image')->getData();

                // this condition is needed because the 'brochure' field is not required
                // so the PDF file must be processed only when a file is uploaded
                if ($imageFile) {
                    $originalFilename = pathinfo($imageFile->getClientOriginalName(), PATHINFO_FILENAME);
                    // this is needed to safely include the file name as part of the URL
                    $safeFilename = $slugger->slug($originalFilename);
                    $newFilename = $safeFilename.'-'.uniqid().'.'.$imageFile->guessExtension();

                    // Move the file to the directory where brochures are stored
                    try {
                        $imageFile->move(
                            $this->getParameter('item_directory'),
                            $newFilename
                        );
                    } catch (FileException $e) {
                        // ... handle exception if something happens during file upload
                    }

                    // updates the 'brochureFilename' property to store the PDF file name
                    // instead of its contents
                    $item->setImage($newFilename);
                }

                $item = $item_form->getData();

                $em = $this->getDoctrine()->getManager();

                
                
                $em->persist($item);
                $em->flush();

                return $this->redirectToRoute('admin');
            }

            return $this->render('painel/contents/admin/admin.html.twig', [
                'users'     =>  $select_user,
                'cat_new'   =>  $itemtype_form->createView(),
                'cat_sel'   =>  $select_itemtype,
                'item_new'  =>  $item_form->createView(),
                'item_sel'  =>  $select_item,
                'status_race'      =>  $user->getRace(),
                'status_name'      =>  $user->getName(),
                'status_image'      =>  $user->getImage(),
                'status_coins'     =>  $user->getCoin()
            ]);

        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    /**
     * @Route("/itens", name="admin_itens")
     */
    public function adminItens(ContainerInterface $container, Request $request)
    {
        try{
            $user = $this->getUser();

            $em = $this->getDoctrine()->getManager();

            $item = $em->getRepository(Item::class)->searchItem($request->get('search'), $request->get('category'));
            $cat = $em->getRepository(ItemType::class)->findAll();

            $pagenator = $container->get('knp_paginator');
            $result = $pagenator->paginate(
                $item,
                $request->query->getInt('page',1),
                $request->query->getInt('limit',6)
            );

            return $this->render('painel/contents/admin/itens/itens.html.twig', [
                'itens'             =>  $result,
                'category'          =>  $cat,
                'status_race'       =>  $user->getRace(),
                'status_name'       =>  $user->getName(),
                'status_image'      =>  $user->getImage(),
                'status_coins'      =>  $user->getCoin()
            ]);
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    /**
     * @Route("/edit/item", name="edit_item")
     */
    public function editItem(Request $request)
    {
        try{
            $em = $this->getDoctrine()->getManager();

            $item = $em->getRepository(Item::class)->findBy([
                'aion'  =>  $request->get('id')
            ]);

            $item[0]->setType($request->get('edittype'));
            $item[0]->setLevel($request->get('editlevel'));
            $item[0]->setName($request->get('editname'));
            $item[0]->setPrice($request->get('editprice'));
            $item[0]->setDiscount($request->get('editdiscount'));
            $item[0]->setAmount($request->get('editamount'));
            $item[0]->setBbcode($request->get('editbbcode'));
            $item[0]->setModifiedAt(new \DateTime('now'));

            $em->flush();

            return $this->redirectToRoute('admin_itens');
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    /**
     * @Route("/delete/item", name="delete_item")
     */
    public function deleteItem(Request $request)
    {
        try{
            $em = $this->getDoctrine()->getManager();

            $item = $em->getRepository(Item::class)->find($request->get('id'));

            $em->remove($item);

            $em->flush();

            return $this->redirectToRoute('admin_itens');
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    /**
     * @Route("/types", name="admin_types")
     */
    public function adminTypes(ContainerInterface $container, Request $request)
    {
        try{
            $user = $this->getUser();

            $em = $this->getDoctrine()->getManager();

            $cat = $em->getRepository(ItemType::class)->findAll();

            $pagenator = $container->get('knp_paginator');
            $result = $pagenator->paginate(
                $cat,
                $request->query->getInt('page',1),
                $request->query->getInt('limit',6)
            );

            return $this->render('painel/contents/admin/itens/types.html.twig', [
                'category'             =>  $result,
                'status_race'       =>  $user->getRace(),
                'status_name'       =>  $user->getName(),
                'status_image'      =>  $user->getImage(),
                'status_coins'      =>  $user->getCoin()
            ]);
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    /**
     * @Route("/edit/type", name="edit_type")
     */
    public function editCat(Request $request)
    {
        try{
            $em = $this->getDoctrine()->getManager();

            $type = $em->getRepository(ItemType::class)->find($request->get('id'));

            $type->setName($request->get('editname'));
            $type->setModifiedAt(new \DateTime('now'));

            $em->flush();

            return $this->redirectToRoute('admin_types');
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    /**
     * @Route("/delete/type", name="delete_type")
     */
    public function deleteType(Request $request)
    {
        try{
            $em = $this->getDoctrine()->getManager();

            $type = $em->getRepository(ItemType::class)->find($request->get('id'));

            $em->remove($type);

            $em->flush();

            return $this->redirectToRoute('admin_types');
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    /**
     * @Route("/suport", name="admin_suport")
     */
    public function adminIndex(ContainerInterface $container, Request $request)
    {
        try{
            $user = $this->getUser();

            $em = $this->getDoctrine()->getManager();

            $ticket_view = $em->getRepository(Ticket::class)->searchTicket($request->get('search'), null);

            $pagenator = $container->get('knp_paginator');
            $result = $pagenator->paginate(
                $ticket_view,
                $request->query->getInt('page',1),
                $request->query->getInt('limit',6)
            );

            return $this->render('painel/contents/admin/suport/suport.html.twig', [
                'data'          =>  $result,
                'status_race'      =>  $user->getRace(),
                'status_name'      =>  $user->getName(),
                'status_image'      =>  $user->getImage(),
                'status_coins'     =>  $user->getCoin()
            ]);
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    /**
     * @Route("/suport/ticket/{id}", name="admin_ticket")
     */
    public function ticketIndex($id, Request $request)
    {
        try{
            $user = $this->getUser();

            $em = $this->getDoctrine()->getManager();

            $ticket = $em->getRepository(Ticket::class)->find($id);
            $ticketMessage = $em->getRepository(TicketMessage::class)->findBy([
                'ticket'    =>  $ticket->getId()
            ]);
            
            return $this->render('painel/contents/admin/suport/ticket.html.twig', [
                'ticket'    =>  $ticket,
                'messages'  =>  $ticketMessage,
                'status_race'      =>  $user->getRace(),
                'status_name'      =>  $user->getName(),
                'status_image'      =>  $user->getImage(),
                'status_coins'     =>  $user->getCoin()
            ]);
        }catch(\Exception $e){
            return $e->getMessage();
        } 
        
    }

    /**
     * @Route("/suport/ticket/send/{id}", name="admin_ticket_send")
     */
    public function ticketSendIndex($id, Request $request)
    {
        try{
            $em = $this->getDoctrine()->getManager();

            $response = new TicketMessage();

            $response->setTicket($id);
            $response->setSender('Admin');
            $response->setMessage($request->get('response'));
            $response->setCreatedAt(new \DateTime('now'));
            $response->setModifiedAt(new \DateTime('now'));

            $em->persist($response);
            $em->flush();

            return $this->redirectToRoute('admin_suport');
        }catch(\Exception $e){
            return $e->getMessage();
        } 
        
    }

    /**
     * @Route("/suport/ticket/close/{id}", name="admin_ticket_close")
     */
    public function ticketCloseIndex($id, Request $request)
    {
        try{
            $em = $this->getDoctrine()->getManager();

            $close = $em->getRepository(Ticket::class)->find($id);

            $close->setStatus('Closed');
            $close->setModifiedAt(new \DateTime('now'));

            $em->flush();

            return $this->redirectToRoute('admin_suport');
        }catch(\Exception $e){
            return $e->getMessage();
        } 
        
    }

    /**
     * @Route("/coin", name="admin_coin")
     */
    public function coinIndex(ContainerInterface $container, Request $request)
    {
        try{
            $user = $this->getUser();
            
            $em = $this->getDoctrine()->getManager();

            $ticket_view = $em->getRepository(HistoryCoin::class)->searchCoins($request->get('search'));

            $pagenator = $container->get('knp_paginator');
            $result = $pagenator->paginate(
                $ticket_view,
                $request->query->getInt('page',1),
                $request->query->getInt('limit',7)
            );

            return $this->render('painel/contents/admin/coin/coin.html.twig', [
                'data'          =>  $result,
                'status_race'      =>  $user->getRace(),
                'status_name'      =>  $user->getName(),
                'status_image'      =>  $user->getImage(),
                'status_coins'     =>  $user->getCoin()
            ]);
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    /**
     * @Route("/coin/aprove/{id}/{user}", name="admin_coin_aprove")
     */
    public function coinAproveIndex($id, $user)
    {
        try{
            $em = $this->getDoctrine()->getManager();

            $close = $em->getRepository(HistoryCoin::class)->find($id);

            $close->setStatus('Aprove');
            $close->setModifiedAt(new \DateTime('now'));

            $user = $em->getRepository(User::class)->find($user);

            $user->setCoin($user->getCoin()+$close->getAmount());
            $user->setModifiedAt(new \DateTime('now'));

            $em->flush();

            return $this->redirectToRoute('admin_coin');
        }catch(\Exception $e){
            return $e->getMessage();
        } 
        
    }
}

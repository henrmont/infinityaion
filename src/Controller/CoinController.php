<?php

namespace App\Controller;

use App\Entity\HistoryCoin;
use App\Entity\Item;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CoinController extends AbstractController
{
    /**
     * @Route("/coin", name="coin")
     */
    public function index()
    {
        $user = $this->getUser();

        $em = $this->getDoctrine()->getManager();

        $promo = $em->getRepository(Item::class)->findBy([
            'promo'     =>  true
        ]);
        $players = $em->getRepository(User::class)->searchChar($user->getUsername());

        return $this->render('painel/contents/coin/coin.html.twig',[
            'status_race'      =>  $user->getRace(),
            'status_name'      =>  $user->getName(),
            'status_image'      =>  $user->getImage(),
            'status_coins'     =>  $user->getCoin(),
            'promo'     =>  $promo,
            'players'   =>  $players
        ]);
    }

    /**
     * @Route("/coin/20", name="coin_20")
     */
    public function coin20index()
    {
        try{
            $user = $this->getUser();

            $em = $this->getDoctrine()->getManager();
            
            $coin = new HistoryCoin();

            $coin->setUser($user->getId());
            $coin->setAmount(2000);
            $coin->setPrice(20.00);
            $coin->setStatus('Pending');
            $coin->setCreatedAt(new \DateTime('now'));
            $coin->setModifiedAt(new \DateTime('now'));

            $em->persist($coin);
            $em->flush();
            
            return $this->redirect('https://pag.ae/7W375ZFTH');
        }catch(\Exception $e){
            return $e->getMessage();
        } 
    }

    /**
     * @Route("/coin/50", name="coin_50")
     */
    public function coin50index()
    {
        try{
            $user = $this->getUser();

            $em = $this->getDoctrine()->getManager();
            
            $coin = new HistoryCoin();

            $coin->setUser($user->getId());
            $coin->setAmount(5000);
            $coin->setPrice(50.00);
            $coin->setStatus('Pending');
            $coin->setCreatedAt(new \DateTime('now'));
            $coin->setModifiedAt(new \DateTime('now'));

            $em->persist($coin);
            $em->flush();
            
            return $this->redirect('https://pag.ae/7W38W-FnR');
        }catch(\Exception $e){
            return $e->getMessage();
        } 
    }

    /**
     * @Route("/coin/80", name="coin_80")
     */
    public function coin80index()
    {
        try{
            $user = $this->getUser();

            $em = $this->getDoctrine()->getManager();
            
            $coin = new HistoryCoin();

            $coin->setUser($user->getId());
            $coin->setAmount(8000);
            $coin->setPrice(80.00);
            $coin->setStatus('Pending');
            $coin->setCreatedAt(new \DateTime('now'));
            $coin->setModifiedAt(new \DateTime('now'));

            $em->persist($coin);
            $em->flush();
            
            return $this->redirect('https://pag.ae/7W38XaexR');
        }catch(\Exception $e){
            return $e->getMessage();
        } 
    }

    /**
     * @Route("/coin/100", name="coin_100")
     */
    public function coin100index()
    {
        try{
            $user = $this->getUser();

            $em = $this->getDoctrine()->getManager();
            
            $coin = new HistoryCoin();

            $coin->setUser($user->getId());
            $coin->setAmount(10000);
            $coin->setPrice(100.00);
            $coin->setStatus('Pending');
            $coin->setCreatedAt(new \DateTime('now'));
            $coin->setModifiedAt(new \DateTime('now'));

            $em->persist($coin);
            $em->flush();
            
            return $this->redirect('https://pag.ae/7W38XiQpn');
        }catch(\Exception $e){
            return $e->getMessage();
        } 
    }
}

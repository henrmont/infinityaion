<?php

namespace App\Controller;

use App\Entity\Item;
use App\Entity\Player;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class RankingController extends AbstractController
{
    /**
     * @Route("/ranking", name="ranking")
     */
    public function indexRanking()
    {
        try{
            $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
            
            $user = $this->getUser();

            $em = $this->getDoctrine()->getManager();

            $ranking = $em->getRepository(Player::class)->getAbyssGlobal();
            $rweekly = $em->getRepository(Player::class)->getAbyssWeekly();
            $rdaily = $em->getRepository(Player::class)->getAbyssDaily();

            $promo = $em->getRepository(Item::class)->findBy([
                'promo'     =>  true
            ]);

            $players = $em->getRepository(User::class)->searchChar($user->getUsername());

            return $this->render('painel/contents/ranking/ranking.html.twig', [
                'ranking'           =>  $ranking,
                'weekly'            =>  $rweekly,
                'daily'             =>  $rdaily,
                'status_race'       =>  $user->getRace(),
                'status_name'       =>  $user->getName(),
                'status_image'      =>  $user->getImage(),
                'status_coins'      =>  $user->getCoin(),
                'promo'             =>  $promo,
                'players'           =>  $players
            ]);
        }catch(\Exception $e){
            // $this->addFlash(
            //     'notice',
            //     'Faça o login.'
            // );
            // return $this->redirectToRoute('site');
        }
    }
}

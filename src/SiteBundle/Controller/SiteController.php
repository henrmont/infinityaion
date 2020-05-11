<?php

namespace App\SiteBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SiteController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index()
    {
        return $this->render('index.html.twig', [
            // 'controller_name'   =>  'CommunityController',
            // 'communitys'        =>  $communitys,
            // 'othersCommunitys'  =>  $othersCommunitys,
            // 'innerCommunitys'   =>  $innerCommunitys,
        ]);
    }
}

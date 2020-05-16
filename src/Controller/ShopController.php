<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ShopController extends AbstractController
{
    /**
     * @Route("/shop", name="shop")
     */
    public function index()
    {
        return $this->render('painel/contents/shop.html.twig', [
            'controller_name' => 'ShopController',
        ]);
    }
}

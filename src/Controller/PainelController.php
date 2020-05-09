<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PainelController extends AbstractController
{
    /**
     * @Route("/painel", name="painel")
     */
    public function index()
    {
        return $this->render('painel/index.html.twig', [
            'controller_name' => 'PainelController',
        ]);
    }
}

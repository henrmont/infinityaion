<?php

namespace App\Controller;

use App\Entity\CmsCarousel;
use App\Entity\CmsNotice;
use App\Entity\CmsResource;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SiteController extends AbstractController
{
    /**
     * @Route("/site", name="site")
     */
    public function index()
    {
        $em = $this->getDoctrine()->getManager();

        $carousel = $em->getRepository(CmsCarousel::class)->findBy([
            'isActive'  =>  true
        ]);

        $notice = $em->getRepository(CmsNotice::class)->findBy([
            'isActive'  =>  true
        ],[
            'id'        =>  'DESC'
        ]);

        $resource = $em->getRepository(CmsResource::class)->findBy([
            'isActive'  =>  true
        ],[
            'id'        =>  'DESC'
        ]);

        return $this->render('site/index.html.twig',[
            'carousel'  =>  $carousel,
            'notice'    =>  $notice,
            'resource'  =>  $resource
        ]);
    }
}

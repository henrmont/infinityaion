<?php

namespace App\Controller;

use App\Entity\Message;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MessageController extends AbstractController
{
    /**
     * @Route("/message", name="message")
     */
    public function index(ContainerInterface $container, Request $request)
    {
        try{
            $user = $this->getUser();

            $em = $this->getDoctrine()->getManager();

            $message = $em->getRepository(Message::class)->findBy([
                'user'          =>  $user->getId()
            ],[
                'id'            =>  'DESC'
            ]);

            $pagenator = $container->get('knp_paginator');
            $result = $pagenator->paginate(
                $message,
                $request->query->getInt('page',1),
                $request->query->getInt('limit',7)
            );

            return $this->render('painel/contents/message/message.html.twig', [
                'data'      =>  $result,
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
     * @Route("/message/view/{id}", name="message_view")
     */
    public function messageViewIndex($id)
    {
        try{
            $em = $this->getDoctrine()->getManager();

            $message = $em->getRepository(Message::class)->find($id);
            
            return $this->render('painel/contents/message/message_view.html.twig', [
                'data'    =>  $message
            ]);
        }catch(\Exception $e){
            return $e->getMessage();
        } 
        
    }

    /**
     * @Route("/message/del/{id}", name="message_del")
     */
    public function messageDelIndex($id)
    {
        try{
            $em = $this->getDoctrine()->getManager();

            $message = $em->getRepository(Message::class)->find($id);

            $em->remove($message);

            $em->flush();

            return $this->redirectToRoute('message');
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }
}

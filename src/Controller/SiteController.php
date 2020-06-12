<?php

namespace App\Controller;

use App\Entity\CmsCarousel;
use App\Entity\CmsNotice;
use App\Entity\CmsResource;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

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

    /**
     * @Route("/site/recover", name="recover")
     */
    public function recover(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        try{
            $em = $this->getDoctrine()->getManager();

            $email = $em->getRepository(User::class)->findBy([
                'email'     =>  $request->get('email')
            ]);

            if(!empty($email)){
                $email[0]->setPassword(
                    $passwordEncoder->encodePassword(
                        $email[0],
                        $request->get('password')
                    )
                );
                
                $em->flush();

                $em->getRepository(User::class)->recoverPassword($email[0]->getEmail(), base64_encode(sha1($request->get('password'), true)));
            } else {
                $this->addFlash(
                    'notice',
                    'Email Inválido.'
                );
                return $this->redirectToRoute('site');
            }

            $this->addFlash(
                'notice',
                'Senha alterada com sucesso.'
            );
            return $this->redirectToRoute('site'); 
        }catch(\Exception $e){
            $this->addFlash(
                'notice',
                'Faça o login.'
            );
            return $this->redirectToRoute('site');
        }
    }

    /**
     * @Route("/site/isolate/carousel/{id}", name="isolate_carousel")
     */
    public function isolateCarousel($id)
    {
        $em = $this->getDoctrine()->getManager();

        $post = $em->getRepository(CmsCarousel::class)->find($id);

        return $this->render('site/isolate.html.twig',[
            'data'  =>  $post,
        ]);
    }
}

<?php

namespace App\Controller;

use App\Entity\Aion;
use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Security\LoginAuthenticator;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;

class RegistrationController extends AbstractController
{
    /**
     * @Route("/register", name="app_register")
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder, GuardAuthenticatorHandler $guardHandler, LoginAuthenticator $authenticator): Response
    {
        try{
            $user = new User();
            $aion = new Aion();
            $form = $this->createForm(RegistrationFormType::class, $user);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $entityManagerUser = $this->getDoctrine()->getManager();
                $chkmail = $entityManagerUser->getRepository(User::class)->findBy([
                    'email'     =>  $request->request->get('registration_form')
                ]);

                // echo "<pre>";
                // print_r($chkmail);
                // echo "</pre>";
                // die();

                $con = $this->getDoctrine()->getConnection();
                $con->beginTransaction();

                if(empty($chkmail)){
                    // encode the plain password
                    $user->setPassword(
                        $passwordEncoder->encodePassword(
                            $user,
                            $form->get('plainPassword')->getData()
                        )
                    );
                    $user->setCoin(0);
                    $user->setTagFeed(0);
                    $user->setTagCoin(0);
                    $user->setTagShop(0);
                    $user->setTagTicket(0);
                    $user->setIsActive(false);
                    $user->setIsReport(false);
                    $user->setIsSuspect(false);
                    $user->setCreatedAt(new \DateTime('now'));
                    $user->setModifiedAt(new \DateTime('now'));


                    $data = $request->request->get('registration_form');
                    // echo "<pre>";
                    // print_r($data['username']);
                    // echo "</pre>";
                    // die();

                    $date = new DateTime('now');
                    $date->modify('+3 day');

                    $aion->setName($data['username']);
                    $aion->setMembership(2);
                    $aion->setExpire($date);
                    $aion->setPassword(base64_encode(sha1($data['plainPassword'], true)));

                    $entityManagerUser = $this->getDoctrine()->getManager();
                    $entityManagerUser->persist($user);
                    $entityManagerUser->flush();

                    $entityManagerAion = $this->getDoctrine()->getManager('aion');
                    $entityManagerAion->persist($aion);
                    $entityManagerAion->flush();

                    // do anything else you need here, like send an email

                    $con->commit();

                    return $guardHandler->authenticateUserAndHandleSuccess(
                        $user,
                        $request,
                        $authenticator,
                        'main' // firewall name in security.yaml
                    );
                } else {
                    $con->rollBack();
                    
                    $this->addFlash(
                        'notice',
                        'Email já registrado.'
                    );
                    return $this->redirectToRoute('site');
                }
            }

            return $this->render('registration/register.html.twig', [
                'registrationForm' => $form->createView(),
            ]);
        }catch(\Exception $e){
            $this->addFlash(
                'notice',
                'Usuário já registrado.'
            );
            return $this->redirectToRoute('site');
        }
    }
}

<?php

namespace App\Controller;

use App\Entity\Aion;
use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Security\LoginAuthenticator;
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
        $user = new User();
        $aion = new Aion();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
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
            $user->setCreatedAt(new \DateTime('now'));
            $user->setModifiedAt(new \DateTime('now'));


            $data = $request->request->get('registration_form');
            // echo "<pre>";
            // print_r($data['username']);
            // echo "</pre>";
            // die();

            $aion->setName($data['username']);
            $aion->setMembership(0);
            $aion->setPassword(base64_encode(sha1($data['plainPassword'], true)));

            $entityManagerUser = $this->getDoctrine()->getManager();
            $entityManagerUser->persist($user);
            $entityManagerUser->flush();

            $entityManagerAion = $this->getDoctrine()->getManager('aion');
            $entityManagerAion->persist($aion);
            $entityManagerAion->flush();

            // do anything else you need here, like send an email

            return $guardHandler->authenticateUserAndHandleSuccess(
                $user,
                $request,
                $authenticator,
                'main' // firewall name in security.yaml
            );
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }
}

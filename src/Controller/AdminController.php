<?php

namespace App\Controller;

use App\Entity\ItemType;
use App\Form\ItemTypeType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin")
 */
class AdminController extends AbstractController
{
    /**
     * @Route("/", name="admin")
     */
    public function index(Request $request)
    {
        try{
            $em = $this->getDoctrine();

            /* Categoria */
            $select_itemtype = $em->getRepository(ItemType::class)->findAll();

            // Inc
            $itemtype = new ItemType();
            $itemtype_form = $this->createForm(ItemTypeType::class, $itemtype);
            $itemtype_form->handleRequest($request);
            if ($itemtype_form->isSubmitted() && $itemtype_form->isValid()) {
                $itemtype->setCreatedAt(new \DateTime('now'));
                $itemtype->setModifiedAt(new \DateTime('now'));

                $itemtype = $itemtype_form->getData();

                $em = $this->getDoctrine()->getManager();
                
                $em->persist($itemtype);
                $em->flush();

                return $this->redirectToRoute('admin');
            }

            $select_itemtype = $em->getRepository(ItemType::class)->findAll();

            // echo "<pre>";
            // print_r($select_itemtype);
            // echo "</pre>";
            // die();

            return $this->render('painel/contents/admin/admin.html.twig', [
                'item_new'  => $itemtype_form->createView(),
                'item_sel'  => $select_itemtype,
            ]);
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    /**
     * @Route("/deltype", name="delete_type")
     */
    public function deleteType(Request $request)
    {
        try{
            $em = $this->getDoctrine()->getManager();

            $type = $em->getRepository(ItemType::class)->find($request->query->get('delcat'));

            $em->remove($type);

            $em->flush();

            return $this->redirectToRoute('admin');
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    /**
     * @Route("/edittype", name="update_type")
     */
    public function updateType(Request $request)
    {
        try{
            $em = $this->getDoctrine()->getManager();

            $type = $em->getRepository(ItemType::class)->find($request->query->get('editcat'));

            $type->setName($request->query->get('editname'));
            $type->setModifiedAt(new \DateTime('now'));

            $em->flush();

            return $this->redirectToRoute('admin');
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }
}

<?php

namespace App\Form;

use App\Entity\Item;
use Doctrine\DBAL\Types\BooleanType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ItemType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('aion_id', IntegerType::class)
            ->add('name', TextType::class)
            ->add('type', ChoiceType::class)
            ->add('level', IntegerType::class)
            ->add('price', IntegerType::class)
            ->add('discount', IntegerType::class)
            ->add('created_at', DateType::class)
            ->add('modified_at', DateType::class)
            ->add('bbcode', TextType::class)
            ->add('promo', BooleanType::class)
            ->add('submit', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Item::class,
        ]);
    }
}

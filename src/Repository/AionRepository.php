<?php

namespace App\Repository;

use App\Entity\Aion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Aion|null find($id, $lockMode = null, $lockVersion = null)
 * @method Aion|null findOneBy(array $criteria, array $orderBy = null)
 * @method Aion[]    findAll()
 * @method Aion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Aion::class);
    }

    // /**
    //  * @return Aion[] Returns an array of Aion objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Aion
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

<?php

namespace App\Repository;

use App\Entity\HistoryCoin;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method HistoryCoin|null find($id, $lockMode = null, $lockVersion = null)
 * @method HistoryCoin|null findOneBy(array $criteria, array $orderBy = null)
 * @method HistoryCoin[]    findAll()
 * @method HistoryCoin[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HistoryCoinRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, HistoryCoin::class);
    }

    // /**
    //  * @return HistoryCoin[] Returns an array of HistoryCoin objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('h.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?HistoryCoin
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    /**
     * @return Ticket[] Returns an array of Item objects
     */
    public function searchCoins($filter)
    {
        $qb = $this->getQueryBuilder();

        $qb
            ->select('
                coin.id as id,
                coin.amount as amount,
                coin.user as user,
                coin.price as price,
                coin.status as status,
                u.username as name,
                u.email as mail
            ')
            ->innerJoin(User::class,'u','WITH','coin.user = u.id')
            ->where('u.email LIKE :filter')
            ->orWhere('u.username LIKE :filter')
            ->setParameter('filter','%'.$filter.'%')
        ;

        return $qb->getQuery()->getResult();
    }

    /**
     * @return \Doctrine\ORM\QueryBuilder
     */
    private function getQueryBuilder()
    {
        $em = $this->getEntityManager();

        $queryBuilder = $em
            ->getRepository(HistoryCoin::class)
            ->createQueryBuilder('coin')
        ;

        return $queryBuilder;
    }
}

<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @UniqueEntity(fields={"username", "email"}, message="User/Email já existe")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $username;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime")
     */
    private $modified_at;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $coin;

    /**
     * @ORM\Column(type="string", length=180)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $image;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $race;

    /**
     * @ORM\Column(type="boolean")
     */
    private $tagFeed;

    /**
     * @ORM\Column(type="boolean")
     */
    private $tagShop;

    /**
     * @ORM\Column(type="boolean")
     */
    private $tagCoin;

    /**
     * @ORM\Column(type="boolean")
     */
    private $tagTicket;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isActive;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isReport;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isSuspect;

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getModifiedAt(): ?\DateTimeInterface
    {
        return $this->modified_at;
    }

    public function setModifiedAt(\DateTimeInterface $modified_at): self
    {
        $this->modified_at = $modified_at;

        return $this;
    }

    public function getCoin(): ?int
    {
        return $this->coin;
    }

    public function setCoin(?int $coin): self
    {
        $this->coin = $coin;

        return $this;
    }

    public function getEmail(): string
    {
        return (string) $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getImage(): string
    {
        return (string) $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getName(): string
    {
        return (string) $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getRace(): string
    {
        return (string) $this->race;
    }

    public function setRace(string $race): self
    {
        $this->race = $race;

        return $this;
    }

    public function getTagFeed(): ?bool
    {
        return $this->tagFeed;
    }

    public function setTagFeed(bool $tagFeed): self
    {
        $this->tagFeed = $tagFeed;

        return $this;
    }

    public function getTagShop(): ?bool
    {
        return $this->tagShop;
    }

    public function setTagShop(bool $tagShop): self
    {
        $this->tagShop = $tagShop;

        return $this;
    }

    public function getTagCoin(): ?bool
    {
        return $this->tagCoin;
    }

    public function setTagCoin(bool $tagCoin): self
    {
        $this->tagCoin = $tagCoin;

        return $this;
    }

    public function getTagTicket(): ?bool
    {
        return $this->tagTicket;
    }

    public function setTagTicket(bool $tagTicket): self
    {
        $this->tagTicket = $tagTicket;

        return $this;
    }

    public function getIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function getIsReport(): ?bool
    {
        return $this->isReport;
    }

    public function setIsReport(bool $isReport): self
    {
        $this->isReport = $isReport;

        return $this;
    }

    public function getIsSuspect(): ?bool
    {
        return $this->isSuspect;
    }

    public function setIsSuspect(bool $isSuspect): self
    {
        $this->isSuspect = $isSuspect;

        return $this;
    }
}

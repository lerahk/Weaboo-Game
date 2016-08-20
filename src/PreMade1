#pragma strict

var monster : CompletedMonsterAbstract;

//public variables should be changes after completion//
private var cHealth : int;
private var cNourishment : int;
private var cEnergy : int;
private var cHappiness : int;
private var cAffection : int;

function Awake()
{
	cHealth = 70;
	cNourishment = 100;
	cEnergy = 50;
	cHappiness = 30;
	cAffection = 0;
}

function Update()
{
	monster.checkHealth(cHealth);
  monster.checkEnergy(cEnergy);
  monster.checkHappiness(cHappiness);
  monster.checkAffection(cAffection);
  monster.checkNourishment(cNourishment);
  monster.genericMovement();
  monster.OnCollisionEnter();
}

function FixedUpdate
{
	monster.lowerHappiness(timer, cHappiness);
  monster.lowerAffection(timer);
  monster.lowerEnergy(timer);
  monster.lowerNourishment(timer);
}

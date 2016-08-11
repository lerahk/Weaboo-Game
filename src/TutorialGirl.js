#pragma strict

var monster : CompletedMonsterAbstract;

//public variables should be changes after completion//
private var cHealth : int;
private var cNourishment : int;
private var cEnergy : int;
private var cHappiness : int;
private var cAffection : int;

function Start()
{
  cHealth = 100;
  cNourishment = 100;
  cEnergy = 100;
  cHappiness = 100;
  cAffection = 50;
}

function Update()
{
  monster.lowerHappiness(timer, cHappiness);
  monster.lowerAffection(timer);
  monster.lowerEnergy(timer);
  monster.lowerNourishment(timer);
}

function FixedUpdate()
{
  monster.checkHealth(cHealth);
  monster.checkEnergy(cEnergy);
  monster.checkHappiness(cHappiness);
  monster.checkAffection(cAffection);
  monster.checkNourishment(cNourishment);
}
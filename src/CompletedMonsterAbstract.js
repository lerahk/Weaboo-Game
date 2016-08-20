#pragma strict;


///Initialized the MINIMUM STATS : These Stay constant and final//
private var MIN_HEALTH : int = 0;
private var MIN_ENERGY : int = 0;
private var MIN_HAPPINESS : int = 0;
private var MIN_AFFECTION : int = 0;
private var MIN_NOURISHMENT : int = 0;
//punlic cariables (SUBJECT TO CHANGE)//
var isSick : bool = false;
var tempTimer : double = 7.0; //make the a constant when we find the right number
var criticalTimer : double = 4.0;
var timer : double = 15.0; //same with this one
var randDirection : int = 5;

//All the functions to check your statistics//

function checkHealth(cHealth : int)
{
  if(cHealth == MIN_HEALTH)
  {
    isSick = true;
    //add animation for not moving.
  }
}

function checkEnergy(cEnergy : int)
{
  if(cEnergy == MIN_ENERGY)
  {
    StartCoroutine(lowerHappiness(tempTimer));
    StartCoroutine(lowerHealth(tempTimer));
  }
}

function checkHappiness(cHappiness : int)
{
  if(cHappiness <= 35)
  {
    startCoroutine(lowerAffection(tempTimer))
  }
}

function checkAffection(cAffection : int)
{
  if(cAffection >= 80)
  {
    //start VN
  }
}

function checkNourishment(cNourishment : int)
{
  if(cNourishment <= 50 && cNourishment >= 25)
  {
    StartCoroutine(lowerHappiness(tempTimer));
  }
  else if(cNourishment <= 25)
  {
    StartCoroutine(lowerHappiness(criticalTimer));
    StartCoroutine(lowerHealth(tempTimer));
  }
}

//All the decrementing functions//

function lowerSick(seconds : int, cEnergy : int, cNourishment : int, cHappiness : int, cAffection : int)
{
  if(isSick = true && cNourishment > 0)
  {
  yield WaitForSeconds();
  cEnergy--;
  cNourishment--;
  cHappiness--;
  cAffection--;
  }
}

function lowerHealth(seconds : int, cHealth : int)
{
  yield WaitForSeconds();
  cHealth--;
}

function lowerHappiness(seconds : int, cHappiness : int)
{
  yield WaitForSeconds();
  cHappiness--;
}

function lowerAffection(seconds : int, cAffection : int)
{
  yield WaitForSeconds();
  cAffection--;
}

function lowerEnergy(seconds : int, cEnergy : int)
{
  yield WaitForSeconds();
  cEnergy--;
}

function lowerNourishment(seconds: int, cNourishment : int)
{
  yield WaitForSeconds();
  cNourishment--;
}

//Misc animations and extras//

function OnMouseDown()
{
  //add animations here
}

//all of the base mechanics for movement//

function genericMovement()
{
   switch(randDirection)
  {
    case 1 :
      gameObject.transform.Translate(vector2.right*xVelo*Time.deltaTime);
     break;
    case 2 :
      gameObject.transform.Translate(-vector2.right*xVelo*Time.deltaTime);
     break;
  }
}

function OnCollisionEnter(other : Collision)
{
  debug.Log("This character collided with..." + other.collider.gameObject.name);
  if(other.collider.gameObject.name == "wall")
  {
  randDirection = Random.Range(1,5);
  }
}
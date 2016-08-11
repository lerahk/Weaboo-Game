#pragma strict

private var randDirection : int = 1;
var isSick : bool = false; //make this private for release
var affectionConditions : bool = false;
var timer : double = 7.0;
var clip : AnimationClip;

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

function onCollisionEnter()
{
  function OnCollisionEnter(other : Collision)
  {
   debug.Log("This character collided with..." + other.collider.gameObject.name);
   if(other.collider.gameObject.name == "wall")
   {
    randDirection = Random.Range(1,5);
   }
  }
  
function checkStats()
  {
    if(cHealth <= minHealth)
    {
      isSick = true;
      randDirection = 0;
      animation.Play(clip.name);
      
      if(cHealth > 50)
      {
        isSick = false;
        randDirection = 1;
        animation.Play(StopSameLayer);
      }
    }
    if(isSick == true)
    {
      yield StartCoroutine(sick(timer));
    }
    ////////////////////////////////////////////////////////////////////
    if(cNourishment <= minNourishment)
    {
      yield StartCoroutine(lowerHealth(timer));
    }
    if(cHappiness <= 25)
    {
      yield StartCoroutine(lowerAffection(timer))
    }
    if(cEnergy <= 0)
    {
       //**Character finds the nearest bed and then goes to sleep (try hiding visibility and playing the sleep animation)**//
    }
    if((cHealth > 80) && (cHappiness > 75) && (cNourishment > 60))
    {
      affectionConditions = true;
    }
}

function sick(seconds:int)
{
  yield WaitForSeconds();
  cEnergy--;
  cNourishment--;
  cHappiness--;
  cAffection--;
}

function lowerHealth(seconds:int)
{
  yield WaitForSeconds();
  cHealth--;
}

function lowerHappiness(seconds:int)
{
  yield WaitForSeconds();
  cHappiness--;
}

function lowerAffection(seconds:int)
{
  yield WaitForSeconds();
  cAffection--;
}
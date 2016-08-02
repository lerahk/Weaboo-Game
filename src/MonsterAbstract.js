#pragma strict

private var randDirection : int = 1;
var isSick : bool = false; //make this private for release
var timer : double;
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
   else if (other.collider.gameObject.name == "furnitureBlock")
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
    }//nested if
    if(isSick == true)
    {
      yield StartCoroutine(sick(timer));
    }
    if()
    {
      
    }
    if()
    {
      
    }
    if()
    {
      
    }
    if()
    {
      
    }
  }
}

function sick(seconds:int)
{
  yield WaitForSeconds(timer);
  energy--;
  nourishment--;
  happiness--;
  affection--;
}
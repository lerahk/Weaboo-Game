public class DefaultMonster
{
	
	//** Non-instantiated Variables **//
	private double monsterHealth, monsterEnergy ,monsterAffection, monsterHappiness, monsterNourishment;
	private int xCoord, yCoord, xVelocity, yVelocity ,sizeWidth, sizeHeight;
	
	//** Custom Constructor for tracking movement **//
	public DefaultMonster()
	{
		// Base statistics for every freshly created monster
		monsterHealth = 100;
		monsterEnergy = 100;
		monsterAffection = 70;
		monsterHappiness = 70
		monsterNourishment = 70
		
		// default coordinates will always be (0, 0) otherwise known as BottomLeft
		xCoord = 0;
		yCoord = 0;
		xVelocity = sizeWidth/4;
		yVelocity = sizeHeight/4;
		
		//Default Size (Monster can grow?); for scaling assume the width is in Em measurement
		sizeWidth = 20;
		sizeHeight = 20;
	}
	
	//** Default Mutators and Accessors **//
	public void setMonsterHealth(double monsterHealth)
	{
		this.monsterHealth = monsterHealth;
	}
	
		public void setMonsterEnergy(double monsterEnergy)
	{
		this.monsterEnergy = monsterEnergy;
	}
			
	public void setMonsterAffection(double monsterAffection)
	{
		this.monsterAffection = monsterAffection;
	}
			
	public void setMonsterHappiness(double monsterHappiness)
	{
		this.monsterHappiness = monsterHappiness;
	}
			
	public void setMonsterNourishment(double mounterNourishment)
	{
		this.monsterNourishment = monsterNourishment;
	}
	
	public void setXCoord(double xCoord)
	{
		this.xCoord = xCoord;
	}
	
	public void setYCoord(double yCoord)
	{
		this.yCoord = yCoord;
	}
	
	public void setXVelocity(double xVelocity)
	{
		this.xVelocity = xVelocity;
	}
	
	public void setYVelocity(double yVelocity)
	{
		this.yVelocity = yVelocity;
	}
	
	public void setSizeWidth(double sizeWidth)
	{
		this.sizeWidth = sizeWidth;
	}
	
	public void setSizeHeight(double sizeHeight)
	{
		this.sizeHeight = sizeHeight;
	}
		
	public double getMonsterHealth()
	{
		return monsterHealth;
	}
				
	public double getMonsterEnergy()
	{
		return monsterEnergy;
	}
	
	public double getMonsterAffection()
	{
		return monsterAffection;
	}
	
	public double getMonsterHappiness()
	{
		return monsterHappiness;
	}
	
	public double getMonsterNourishment()
	{
		return monsterNourishment;
	}
	
	public double getXCoord()
	{
		return xCoord;
	}
	
	public double getYCoord()
	{
		return yCoord;
	}
	
	public double getXVelocity()
	{
		return xVelocity;
	}
	
	public double getYVelocity()
	{
		return yVelocity;
	}
	
	
	
	
	
	
}// end of class CreateMonster
namespace BurgerAPI.Models;

using BurgerAPI.Interfaces; 

public class Burger : IBurger 
{
    public int Id {get; set;}
    public string? Name {get; set;}
    public string? Description {get; set;}
    public string? Image {get; set;}
    public decimal Price {get; set;}
}
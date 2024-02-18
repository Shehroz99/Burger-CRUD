namespace BurgerAPI.Controllers; 

using Microsoft.AspNetCore.Mvc;
using BurgerAPI.Contexts;
using BurgerAPI.Models;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class BurgersController : ControllerBase
{
    private readonly BurgerContext context; 

    public BurgersController(BurgerContext _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Burger>>> Get()
    {
        try 
        {
            List<Burger> burgers = await context.Burgers.ToListAsync();
            if( burgers != null)
            {
                return Ok(burgers);
            }
            else
            {
                return NotFound();
            }
        }
        catch 
        {
            return StatusCode(500);
        }
    }

    [HttpPost]
    public async Task<ActionResult<Burger>> Post(Burger newBurger)
   {
         try
         {
              context.Burgers.Add(newBurger);
              await context.SaveChangesAsync();
              return Ok();
         }
         catch
         {
              return StatusCode(500);
         }
   } 

    [HttpGet("{id}")]
    public async Task<ActionResult<Burger>> Get(int id)
    {
        try
        {
            Burger? burger = await context.Burgers.FindAsync(id);
            if (burger != null)
            {
                return Ok(burger);
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPut]
    public async Task<IActionResult> Put(Burger updatedBurger)
    {
        try
        {
            context.Entry(updatedBurger).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();
        }
        catch
        {
            return StatusCode(500);
        }
    

}
}
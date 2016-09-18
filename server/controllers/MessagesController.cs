using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using netCoreApiExperiment.Config;
using System.Threading.Tasks;
using netCoreApiExperiment.Models;

namespace netCoreApiExperiment.Controllers
{
    [Route("api/[controller]")]
    public class MessagesController : Controller
    {
        private AppDbContext _db; 

        public MessagesController(AppDbContext dbContext) {
            _db = dbContext;
        }
        // GET api/messages
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _db.Messages.ToListAsync());
            /*
            return new List<object> { 
                new {id = "1", title = "Hello World!", body = "This is the first message from the api!", x = 10 , y = 10, rotation=1},
                new {id = "2", title = "Long note", body = "This is another note, with more text to see how does it fit the screen!", x = 700 , y = 100, rotation=3},
                new {id = "3", title = "Goodbye World!", body = "This is the last message from the api!", x = 500 , y = 400, rotation=-2},
            };
            */
        }

        // GET api/messages/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            Message message = await _db.Messages.FirstOrDefaultAsync(a => a.id == id);
            if(message != null) return Ok(message);
            else return NotFound();
        }

        // POST api/messages
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Message message)
        {
            if(ModelState.IsValid) {
                _db.Messages.Add(message);
                await _db.SaveChangesAsync();
                return Ok(message);
            }
            else return BadRequest();
        }

        // PUT api/messages/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Message message)
        {
            if (ModelState.IsValid)
            {
                if (!await _db.Messages.AnyAsync(a => a.id == id)) return NotFound();
                _db.Messages.Update(message);
                await _db.SaveChangesAsync();
                return Ok(message);
            }
            else return BadRequest();
        }

        // DELETE api/messages/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

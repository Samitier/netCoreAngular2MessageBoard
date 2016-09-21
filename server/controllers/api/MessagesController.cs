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
        }

        // GET api/messages/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            Message message = await _db.Messages.FirstOrDefaultAsync(a => a.Id == id);
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
                if (!await _db.Messages.AnyAsync(a => a.Id == id)) return NotFound();
                _db.Messages.Update(message);
                await _db.SaveChangesAsync();
                return Ok(message);
            }
            else return BadRequest();
        }

        // DELETE api/messages/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            Message message = await _db.Messages.FirstOrDefaultAsync(a => a.Id == id);
            if (message == null) return NotFound();
            else
            {
                _db.Messages.Remove(message);
                await _db.SaveChangesAsync();
                return Ok(message);
            }
        }
    }
}

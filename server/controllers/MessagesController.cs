using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace netCoreApiExperiment.Controllers
{
    [Route("api/[controller]")]
    public class MessagesController : Controller
    {
        // GET api/messages
        [HttpGet]
        public List<object> Get()
        {
            return new List<object> { 
                new {id = "1", title = "Hello World!", body = "This is the first message from the api!", x = "10" , y = "10"},
                new {id = "2", title = "Long note", body = "This is another note, with more text to see how does it fit the screen!", x = "700" , y = "100"},
                new {id = "3", title = "Goodbye World!", body = "This is the last message from the api!", x = "500" , y = "400"},
            };
        }

        // GET api/messages/5
        [HttpGet("{id}")]
        public object Get(int id)
        {
            return "values";
        }

        // POST api/messages
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/messages/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/messages/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

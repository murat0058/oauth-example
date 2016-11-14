using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using MyApp.API.Models;

namespace MyApp.API.Controllers
{
    [RoutePrefix("api/todos")]
    public class TodosController : ApiController
    {
        private static readonly List<Todo> _todos = new List<Todo> {
            new Todo { Id = Guid.NewGuid(), Title = "First todo item" },
            new Todo { Id = Guid.NewGuid(), Title = "Second todo item" }
        };

        [Route]
        public IHttpActionResult Get()
        {
            return Ok(_todos);
        }

        [Route("{id:guid}", Name = "GetTodoById")]
        public IHttpActionResult GetById(Guid id)
        {
            var item = _todos.SingleOrDefault(x => x.Id == id);
            if (item == null)
            {
                return NotFound();
            }

            return Ok(item);
        }

        [HttpPost]
        [Route]
        public IHttpActionResult Post([FromBody]CreateTodoModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var item = new Todo { Id = Guid.NewGuid(), Title = model.Title };
            _todos.Add(item);

            return CreatedAtRoute("GetTodoById", new { item.Id }, item);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public IHttpActionResult Update(Guid id, [FromBody]UpdateTodoModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var item = _todos.SingleOrDefault(x => x.Id == id);
            if (item == null)
            {
                return NotFound();
            }

            item.Title = model.Title;
            if (!item.IsCompleted && model.IsCompleted)
            {
                item.IsCompleted = true;
                item.CompletionTimeStamp = DateTimeOffset.Now;
            }
            else if (item.IsCompleted && !model.IsCompleted)
            {
                item.IsCompleted = false;
                item.CompletionTimeStamp = null;
            }

            return Ok(item);
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public IHttpActionResult Remove(Guid id)
        {
            var item = _todos.SingleOrDefault(x => x.Id == id);
            if (item == null)
            {
                return NotFound();
            }

            _todos.Remove(item);
            return StatusCode(HttpStatusCode.NoContent);
        }
    }
}

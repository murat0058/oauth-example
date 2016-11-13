using System.ComponentModel.DataAnnotations;

namespace MyApp.API.Models
{
    public class CreateTodoModel
    {
        [Required, StringLength(100)]
        public string Title { get; set; }
    }
}
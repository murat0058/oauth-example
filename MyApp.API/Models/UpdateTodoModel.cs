using System.ComponentModel.DataAnnotations;

namespace MyApp.API.Models
{
    public class UpdateTodoModel
    {
        [Required, StringLength(100)]
        public string Title { get; set; }
        public bool IsCompleted { get; set; }
    }
}
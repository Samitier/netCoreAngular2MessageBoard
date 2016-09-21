using System.ComponentModel.DataAnnotations;

namespace netCoreApiExperiment.Models
{
    public class Message
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(19),MinLength(1)]
        public string Title { get; set; }
        [Required]
        [MaxLength(210),MinLength(1)]
        public string Body { get; set; }
        [Required]
        public int X { get; set; }
        [Required]
        public int Y { get; set; }
        [Required]
        public int Rotation { get; set; } 
    } 
}

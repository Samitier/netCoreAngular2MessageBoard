namespace netCoreApiExperiment.Models
{
    public class Message
    {
        public int Id { get; set; }
        
        public string Title { get; set; }
        public string Body { get; set; }
        
        public int X { get; set; }
        public int Y { get; set; }
        public int Rotation { get; set; } 
    } 
}

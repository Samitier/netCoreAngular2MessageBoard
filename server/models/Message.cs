namespace netCoreApiExperiment.Models
{
    public class Message
    {
        public int id { get; set; }
        
        public string title { get; set; }
        public string body { get; set; }
        
        public int x { get; set; }
        public int y { get; set; }
        public int rotation { get; set; }
    } 
}

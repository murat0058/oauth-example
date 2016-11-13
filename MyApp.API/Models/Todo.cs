﻿using System;

namespace MyApp.API.Models
{
    public class Todo
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public bool IsCompleted { get; set; }
        public DateTimeOffset? CompletionTimeStamp { get; set; }
    }
}
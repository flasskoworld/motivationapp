import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WisdomService {
  private wisdomList = [
    {
      id: 0,
      title: "The Power of Positive Thinking",
      content: "Positive thinking is a mental attitude that focuses on the good and expects positive outcomes. It can have a significant impact on your physical and mental well-being, relationships, and overall success in life. By cultivating a positive mindset, you can reduce stress, increase resilience, and improve your ability to overcome challenges."
    },
    {
      id: 1,
      title: "The Importance of Gratitude",
      content: "Gratitude is the practice of recognizing and appreciating the good things in your life. It can lead to increased happiness, improved relationships, and better overall well-being. By regularly expressing gratitude, you train your mind to focus on the positive aspects of life, which can help you maintain a more optimistic outlook even during difficult times."
    },
    {
      id: 2,
      title: "Mindfulness and Its Benefits",
      content: "Mindfulness is the practice of being fully present and engaged in the current moment. It involves paying attention to your thoughts, feelings, and surroundings without judgment. Regular mindfulness practice can reduce stress, improve focus, enhance emotional regulation, and contribute to overall mental well-being."
    },
    {
      id: 3,
      title: "The Power of Goal Setting",
      content: "Setting clear, achievable goals is a powerful tool for personal and professional growth. Goals provide direction, motivation, and a sense of purpose. By breaking larger goals into smaller, manageable steps, you can make consistent progress and build momentum towards achieving your dreams."
    },
  ];

  getWisdomList() {
    return this.wisdomList;
  }

  getWisdomById(id: number) {
    return this.wisdomList.find(item => item.id === id);
  }
}
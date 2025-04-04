
import React from 'react';
import { Instagram } from 'lucide-react';

const SocialFeeds = () => {
  // Simulated feed posts
  const feedPosts = [
    {
      id: 1,
      platform: 'instagram',
      image: '/placeholder.svg',
      caption: 'Morning workout routine! 💪 #FitnessGoals #MorningWorkout',
      likes: 126,
      comments: 14,
      date: '2 days ago',
    },
    {
      id: 2,
      platform: 'instagram',
      image: '/placeholder.svg',
      caption: 'Client transformation! 20 pounds down in just 2 months. 🔥 #TransformationTuesday',
      likes: 215,
      comments: 32,
      date: '4 days ago',
    },
    {
      id: 3,
      platform: 'instagram',
      image: '/placeholder.svg',
      caption: 'New group fitness class starting next week! Sign up now. 📅 #GroupFitness',
      likes: 98,
      comments: 7,
      date: '1 week ago',
    },
    {
      id: 4,
      platform: 'instagram',
      image: '/placeholder.svg',
      caption: 'Healthy meal prep ideas for busy professionals! 🥗 #MealPrep #HealthyEating',
      likes: 156,
      comments: 21,
      date: '1 week ago',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {feedPosts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="relative aspect-square bg-gray-100">
            <img 
              src={post.image} 
              alt={post.caption} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <Instagram size={16} className="text-[#E1306C] mr-1" />
              <span className="text-xs text-gray-500">{post.date}</span>
            </div>
            <p className="text-sm mb-3 line-clamp-3">{post.caption}</p>
            <div className="flex justify-between text-xs text-gray-500">
              <span>{post.likes} likes</span>
              <span>{post.comments} comments</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialFeeds;

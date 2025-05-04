import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-problem-solving',
  imports: [CommonModule],
  templateUrl: './problem-solving.component.html',
  styleUrl: './problem-solving.component.scss'
})
export class ProblemSolvingComponent {
  questions = [
    {
      id: 1,
      title: 'Two Sum',
      difficulty: 'Easy',
      category: 'Arrays',
      tags: ['HashMap'],
      answer: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}`,
      showAnswer: false
    },
    {
      id: 2,
      title: 'Longest Substring Without Repeating Characters',
      difficulty: 'Medium',
      category: 'Strings',
      tags: ['Sliding Window'],
      answer: `def lengthOfLongestSubstring(s):
    char_set = set()
    left = 0
    max_len = 0
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_len = max(max_len, right - left + 1)
    return max_len`,
      showAnswer: false
    }
  ];

  toggleAnswer(q: any) {
    q.showAnswer = !q.showAnswer;
  }

  copyToClipboard(id: number) {
    const el = document.getElementById(`answer-${id}`);
    if (el) {
      const text = el.innerText || el.textContent || '';
      navigator.clipboard.writeText(text).then(() => {
        alert('Answer copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  }
  
}

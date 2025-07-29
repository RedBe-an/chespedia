'use client';

import React from 'react';

export default function AnimationTest() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-center animate-fadeIn">
        애니메이션 테스트
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-primary text-primary-foreground rounded-lg animate-slideInUp" style={{backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))'}}>
          <h3 className="text-lg font-semibold mb-2">슬라이드 업</h3>
          <p>animate-slideInUp 효과</p>
        </div>
        
        <div className="p-6 bg-accent text-accent-foreground rounded-lg animate-fadeInLeft" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>
          <h3 className="text-lg font-semibold mb-2">페이드 인 왼쪽</h3>
          <p>animate-fadeInLeft 효과</p>
        </div>
        
        <div className="p-6 bg-secondary text-secondary-foreground rounded-lg animate-bounceIn" style={{backgroundColor: 'hsl(var(--secondary))', color: 'hsl(var(--secondary-foreground))'}}>
          <h3 className="text-lg font-semibold mb-2">바운스 인</h3>
          <p>animate-bounceIn 효과</p>
        </div>
        
        <div className="p-6 border rounded-lg animate-rotateIn" style={{backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--card-foreground))', borderColor: 'hsl(var(--border))'}}>
          <h3 className="text-lg font-semibold mb-2">로테이트 인</h3>
          <p>animate-rotateIn 효과</p>
        </div>
        
        <div className="p-6 rounded-lg animate-zoomIn" style={{backgroundColor: 'hsl(var(--muted))', color: 'hsl(var(--muted-foreground))'}}>
          <h3 className="text-lg font-semibold mb-2">줌 인</h3>
          <p>animate-zoomIn 효과</p>
        </div>
        
        <div className="p-6 rounded-lg animate-pulse" style={{backgroundColor: 'hsl(var(--destructive))', color: 'white'}}>
          <h3 className="text-lg font-semibold mb-2">펄스</h3>
          <p>animate-pulse 효과</p>
        </div>
      </div>
      
      <div className="text-center space-x-4">
        <button 
          className="px-6 py-3 rounded-lg hover:animate-bounceIn transition-all"
          style={{backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))'}}
          onClick={() => window.location.reload()}
        >
          애니메이션 다시 보기
        </button>
      </div>
    </div>
  );
}

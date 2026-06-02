"use client";
import React, { useState } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';

export default function ChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatStatus, setChatStatus] = useState('idle');

  return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        
        {isChatOpen && (
          <div className="bg-white w-80 sm:w-96 rounded-2xl shadow-2xl border border-slate-100 mb-4 overflow-hidden flex flex-col transform transition-all">
            {/* Header */}
            <div className="bg-emerald-600 text-white p-4 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-sm">Ask a Question</h4>
                <p className="text-emerald-100 text-xs">Replies typically within 24 hours</p>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-emerald-100 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form Body */}
            <div className="p-5">
              <div className="bg-orange-50 border border-orange-100 text-orange-800 text-xs p-3 rounded-lg mb-4">
                <strong>Note:</strong> This is for general inquiries. Please do not share sensitive medical information here.
              </div>

              {chatStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Send size={24} />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Message Sent!</h4>
                  <p className="text-sm text-slate-600">I will reply to your email shortly.</p>
                  <button 
                    onClick={() => {setIsChatOpen(false); setChatStatus('idle');}}
                    className="mt-6 text-emerald-600 text-sm font-medium hover:underline"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setChatStatus('success');
                    // We will connect this to your email in Step 4
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Your Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="hello@example.com" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Your Message</label>
                    <textarea 
                      required
                      rows={3} 
                      placeholder="How can I help you?" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-emerald-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* The Floating Button */}
        {!isChatOpen && (
          <button 
            onClick={() => setIsChatOpen(true)}
            className="bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 hover:scale-105 transition-all flex items-center justify-center group"
          >
            <MessageCircle size={28} className="group-hover:animate-pulse" />
          </button>
        )}
      </div>
  );
}
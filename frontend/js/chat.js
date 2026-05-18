// Chatbot functionality for MarketPulse
class MarketChatbot {
  constructor() {
    this.messagesContainer = document.getElementById('chatbot-messages');
    this.inputElement = document.getElementById('chatbot-input');
    
    this.init();
  }

  init() {
    // Add event listeners - only Enter key now (button removed)
    this.inputElement.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.handleSendMessage();
      }
    });

    // Load initial market data for chat context
    this.loadMarketData();
  }

  async loadMarketData() {
    try {
      // Get available markets
      const marketsResponse = await fetch('/api/markets');
      const markets = await marketsResponse.json();
      
      // Get top assets for context
      const topAssetsResponse = await fetch('/api/assets');
      const topAssets = await topAssetsResponse.json();
      
      this.contextData = { markets, topAssets };
    } catch (error) {
      console.error('Error loading market data:', error);
    }
  }

  async handleSendMessage() {
    const message = this.inputElement.value.trim();
    if (!message) return;

    // Add user message to chat
    this.addMessage(message, 'user');
    this.inputElement.value = '';

    // Show typing indicator
    const typingIndicator = this.addTypingIndicator();

    try {
      // Get bot response from AI
      const response = await this.getBotResponse(message);
      
      // Remove typing indicator and add bot response
      this.messagesContainer.removeChild(typingIndicator);
      this.addMessage(response, 'bot');
    } catch (error) {
      this.messagesContainer.removeChild(typingIndicator);
      this.addMessage('Ho sento, estic tenint problemes per respondre. Prova més tard.', 'bot');
      console.error('Chat error:', error);
    }
  }

  addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender + '-message');
    messageDiv.textContent = text;
    this.messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  addTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.classList.add('message', 'bot-message');
    typingDiv.id = 'typing-indicator';
    typingDiv.textContent = 'Escrivint...';
    this.messagesContainer.appendChild(typingDiv);
    
    // Scroll to bottom
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    
    return typingDiv;
  }

  async getBotResponse(userMessage) {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error calling AI chat:', error);
      return 'Ho sento, estic tenint problemes per respondre. Prova més tard.';
    }
  }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new MarketChatbot();
});
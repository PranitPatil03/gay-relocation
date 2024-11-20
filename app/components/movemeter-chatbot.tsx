import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SendIcon, X } from "lucide-react";

interface Message {
  text: string;
  sender: "user" | "bot";
}

export function MovemeterChatbot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [showContactAgent, setShowContactAgent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");

      // Bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Here are the top 10 schools in San Francisco:",
            sender: "bot",
          },
          {
            text: "1. Lowell High School\n2. Ruth Asawa San Francisco School of the Arts\n3. Galileo Academy of Science and Technology\n4. Abraham Lincoln High School\n5. George Washington High School\n6. Raoul Wallenberg High School\n7. Balboa High School\n8. Mission High School\n9. John O'Connell High School\n10. Phillip and Sala Burton Academic High School",
            sender: "bot",
          },
        ]);
        setShowContactAgent(true);
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-96 h-[90vh] flex flex-col">
        <CardHeader className="flex justify-between items-center p-4 border-b">
          <CardTitle className="text-lg font-semibold">Chat with AI</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col p-4 overflow-hidden">
          <ScrollArea className="flex-grow mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-[#F1889F] text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
            {showContactAgent && (
              <div className="text-center mt-4 animate-bounce">
                <Button
                  className="bg-[#F1889F] hover:bg-[#E16B84] text-white"
                  onClick={() => {
                    /* Handle contact agent action */
                  }}
                >
                  CONTACT AGENT
                </Button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </ScrollArea>
          <div className="flex mt-4">
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F1889F]"
            />

            <Button
              onClick={handleSend}
              className="rounded-l-none bg-[#F1889F] hover:bg-[#E16B84] text-white"
            >
              <SendIcon className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

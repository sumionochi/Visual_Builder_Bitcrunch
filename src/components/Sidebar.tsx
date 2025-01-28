import React, { useState } from 'react';
import { Button } from './ui/button';
import { apiNodes } from '../data/apiNodes';
import { Search } from 'lucide-react';

interface SidebarProps {
  onDragStart: (event: React.DragEvent, node: any) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onDragStart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(apiNodes.map(node => node.category)));

  const filteredNodes = apiNodes.filter(node => {
    const matchesSearch = node.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         node.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || node.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-80 bg-white border-r p-4 flex flex-col h-full">
      <div className="font-bold text-xl mb-4">BitCrunch API Nodes</div>
      
      <div className="relative mb-4">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search nodes..."
          className="w-full pl-8 pr-4 py-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory(null)}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="flex-1 overflow-auto">
        <div className="space-y-2">
          {filteredNodes.map((node) => (
            <div
              key={node.label}
              className="border rounded-lg p-3 cursor-move bg-white hover:shadow-md transition-shadow"
              draggable
              onDragStart={(event) => onDragStart(event, node)}
            >
              <div className="font-medium text-sm">{node.label}</div>
              <div className="text-xs text-gray-500 mt-1">{node.description}</div>
              <div className="text-xs text-blue-500 mt-1">{node.category}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
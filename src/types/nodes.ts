export interface NodeData {
  label: string;
  endpoint: string;
  method: string;
  params: Record<string, any>;
  result?: any;
  onDelete?: () => void;
}

export interface APINode {
  type: string;
  label: string;
  endpoint: string;
  method: string;
  params: Record<string, any>;
  category: string;
  description: string;
  output_params?: {
    data: {
      type: string;
      items: Record<string, any>;
    };
  };
}

export interface NodeParams {
  [key: string]: { 
    type: 'string' | 'array' | 'integer' | 'boolean';
    required: boolean;
    default?: any;
    description: string;
  };
}
import { Brain } from "lucide-react";
import { Button } from "../ui/button";
import { Settings, Download, Upload } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="p-3 w-full flex justify-between items-center border-b border-gray-200">
      <div className="flex gap-2 items-center justify-center">
        <div className="bg-black p-1 rounded-md">
          <Brain color="white" height={30} width={30} />
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-xl font-bold">Customer Analytics Platform</p>
          <span className="text-gray-700 text-sm">Behavior Prediction & Analysis</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" className="mr-2">
          <Upload /> <span>Import Data</span>
        </Button>
        <Button variant="outline">
          <Download /><span>Export</span>
        </Button>
        <Button size="icon">
          <Settings />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

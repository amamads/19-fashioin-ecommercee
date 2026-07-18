"use client";

import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const PasswordInput = ({ ...props }: React.ComponentProps<typeof Input>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        {...props}
      />
      <Button
        className="absolute top-0 left-0 h-full px-3 hover:bg-transparent"
        onClick={() => setShowPassword(!showPassword)}
        size="icon"
        type="button"
        variant="ghost"
      >
        {showPassword ? (
          <EyeOff className="h-4 w-4 text-muted-foreground" />
        ) : (
          <Eye className="h-4 w-4 text-muted-foreground" />
        )}
      </Button>
    </div>
  );
};

export default PasswordInput;

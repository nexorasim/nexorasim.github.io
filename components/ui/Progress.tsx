'use client'

import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value?: number
  label?: string
  showValue?: boolean
}

const Progress = ({ className, value = 0, label, showValue = false, ...props }: ProgressProps) => (
  <div className="w-full space-y-2">
    {(label || showValue) && (
      <div className="flex justify-between items-center text-sm">
        {label && <span className="text-slate-300">{label}</span>}
        {showValue && <span className="text-primary-400 font-mono">{value}%</span>}
      </div>
    )}
    <ProgressPrimitive.Root
      className={cn(
        'relative h-3 w-full overflow-hidden rounded-full bg-slate-800/50 border border-slate-700/50',
        className
      )}
      {...props}
    >
      <motion.div
        className="h-full w-full flex-1 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-500 ease-out rounded-full shadow-lg"
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </ProgressPrimitive.Root>
  </div>
)

export { Progress }
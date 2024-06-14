'use client'
import React from "react"
import clsx from "clsx"

type BoundedProps ={
    as?:React.ElementType;
     className?:string;
     children:React.ReactNode
    }


const Bounded = React.forwardRef<HTMLDataElement, BoundedProps>(
    ({as: Comp = "selection",className, children, ...restProps }, ref)=>{
        return(
            <Comp ref={ref} className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16",className)}
            {...restProps}>
                <div className="mx-auto  max-w-6x1 ml-32 mr-32">
                {children}
                </div>
            </Comp>
        )
    }
)

Bounded.displayName = "Bounded"

export default Bounded
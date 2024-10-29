import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default ((component?: QuartzComponent) => {
    if (component) { // Checking if component is an argument.
      const Component = component
      function IndexFilter(props: QuartzComponentProps) {
        if(props.fileData.slug === 'index'){ // Filter out component if page is index.
            return <></>
        }else { // Else we simply return the component.
            return <Component {...props} /> 
        }
      }
      return IndexFilter
    } else { // No component given to filter, do nothing.
      return () => <></>
    }
  }) satisfies QuartzComponentConstructor
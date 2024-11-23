const RootLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="h-full bg-pink-400">
            {children}
        </div>
     );
}
 
export default RootLayout;

//  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
//  -
//  -           Fahrzeugtableau - LSS Content
//  -
//  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    var HostPeer = new Peer();
    var PeerId   = null;
    
    HostPeer.on('open', function(id)
    {
        PeerId = id;
    });

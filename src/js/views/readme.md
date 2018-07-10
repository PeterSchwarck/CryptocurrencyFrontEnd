
 path('admin/', admin.site.urls),
    path('alerts/session/<int:session_id>', views.Alert.as_view(), name="getAlerts"),
    path('alerts/', views.Alert.as_view(), name="postNewAlerts"),
    path('alerts/<int:session_id>/status/', views.Alert.as_view(), name="deleteAlert"),
    <!--path('coin/<slug:coin_id>/', views.CoinSearch.as_view(), name="coin"),-->
    path('coin/search/', views.CoinSearch.as_view(), name="coinSearch"),
    path('session/', views.SessionView.as_view(), name="newSession"),

1) alerts
    GET : 'alerts/session/<int:session_id>'
    
2) NOTIFICATIONS
    POST: 'alerts/'
        body:
        {
            email:
            phone:
            coin:
            session:
            volume_delta:
            price_delta:
        }
   
    DELETE:  'alerts/<int:session_id>/status/'
    
3) search
    GET: 'coin/search/'
    
    
    PARAMS
    - MARKET CAP (string| optional): filter search by marcketcap [1 mil, 10 mil, 20 mil]
    - NAME (string): filter search by coin name
    - STATUS (string): filter search by marcketcap [1 mil, 10 mil, 20 mil]

4) Session View
    POST: 'session/'
        body:
        {
            email: 
            phone:
        }
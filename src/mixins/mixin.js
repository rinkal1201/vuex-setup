export const mixin =  {
    methods: {
      getData(){
        var status = this.status;
        return this.users.filter(function(users){
              return users.status == status;
        });
      },
      filter_by_date(users){
          return users.sort(function(a, b){
              return a.created_at > b.created_at;
          })
      }
    }
  }
public class ReportTransferFunctionHandler implements RequestHandler<Object, Object> {

    Gson gson = new GsonBuilder().setPrettyPrinting().create();
  
    @Override
    public Object handleRequest(Object input, Context context) {
      LambdaLogger logger = context.getLogger();
      String response = new String("200 OK");
  
      // log execution details
      logger.log("ENVIRONMENT VARIABLES: " + gson.toJson(System.getenv()));
      logger.log("CONTEXT: " + gson.toJson(context));
  
      // process event
      logger.log("EVENT: ");
      logger.log("EVENT TYPE: " + input.getClass().toString());
  
  
      return null;
    }
  }